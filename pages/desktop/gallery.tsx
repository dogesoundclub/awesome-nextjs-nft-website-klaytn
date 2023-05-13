import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/desktop/Layout";
import Select from 'react-select';
import useInfiniteScrolling from "../../hooks/useInfiniteScrolling";

export default function Gallery() {
  const [boxList, setBoxList] = useState<number[]>([]);
  const [allMates, setAllMates] = useState<number[]>([]);
  const observerRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<{ key: string; value: string }[]>([]);
  const [mateParts, setMateParts] = useState<{ key: string; value: string[] }[]>([]);

  const fetchData = async () => {
    try {
      const matesRes = await fetch('/data/mates.json');
      const matesData = await matesRes.json();

      const matePartsRes = await fetch('/data/mateParts.json');
      const matePartsData = await matePartsRes.json();

      const partsData = [];
      for (const part of matePartsData.collection) {
        for (const key in part) {
          partsData.push({ key: key, value: part[key] });
        }
      }
      setMateParts(partsData);

      const filteredMates = applyFilter(matesData.collection, filters);

      setAllMates(filteredMates);

      setBoxList(filteredMates.slice(0, 50));
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilter = (mates, filters) => {
    const filteredMates = mates.filter((mate:any) => {
      for (const filter of filters) {
        if (mate.properties[filter.key] !== filter.value) {
          return false; // 해당 mate가 필터를 만족하지 못하면 false를 반환합니다.
        }
      }
      return true; // 모든 필터를 만족시킨 mate만 true를 반환합니다.
    });
  
    const filteredMateIds = filteredMates.map((mate:any) => mate.tokenId);
    return filteredMateIds;
  }
  
  const resetFilters = () => {
    setFilters([]);
    fetchData();
  }

  const fetchBoxList = async () => {
    const nextMates = allMates.slice(boxList.length, boxList.length + 50);
    setBoxList(prev => [...prev, ...nextMates]);
  };

  useInfiniteScrolling({
    observerRef: observerRef.current,
    fetchMore: fetchBoxList,
    hasMore: boxList.length < allMates.length,
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleFilterChange = (selectedOption: any, action: any) => {
    setFilters([{ key: action.name, value: selectedOption.value }]);
  };

  const generateOptions = (values: string[]) => {
    return values.map(value => ({ value: value, label: value }));
  };

  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <div id="galleryController" style={{ width: "20%", background: "#E73C83" }}>
          <div style={{ display: "flex", height: "15vh" }}>
            <img src="/desktop/gallery/gallery.webp" alt="" style={{ width: "100%" }}/>
          </div>
          <div>
            {mateParts.map((part, index) => (
              <div key={index}>
                <h2>{part.key}</h2>
                <Select 
                  name={part.key} 
                  options={generateOptions(part.value)} 
                  onChange={handleFilterChange}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ display: "flex", height: "30vh" }}>
            <img src="/desktop/faq/pray_for_dsc.webp" alt="" style={{ width: "100%" }}/>
          </div>
          <div id="galleryContents" style={{ overflow:"scroll", height: "60vh", display: "flex", flexWrap: "wrap" }}>
            {boxList.map(box => (
              <li key={box} className="box" style={{ flexDirection: "column", width: "16.6666%" }}>
                <img src={"https://storage.googleapis.com/dsc-mate/336/dscMate-"+box+".png"} alt="" style={{ width: "100px", borderRadius: "10px" }} ref={observerRef}/>
                <span style={{ fontSize: "15px" }}>DSC Mate #{box}</span>
              </li>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        li {
            list-style: none;
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .box {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      `}</style>
    </Layout>
  );
}
