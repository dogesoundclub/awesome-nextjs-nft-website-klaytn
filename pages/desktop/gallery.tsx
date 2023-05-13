import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/desktop/Layout";
import Select from 'react-select';
import useInfiniteScrolling from "../../hooks/useInfiniteScrolling";

export default function Gallery() {
  const [boxList, setBoxList] = useState<number[]>([]);
  const [allMates, setAllMates] = useState<number[]>([]);
  const loadMoreRef = useRef<HTMLDivElement | null>(null); // 이 부분을 수정했습니다.
  const [filters, setFilters] = useState<{ [key: string]: string }>({});
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
      for (const [key, value] of Object.entries(filters)) {
        if (value === key) continue; // 제목 옵션을 선택했을 때 필터링을 적용하지 않습니다.
        if (mate.properties[key] !== value && (value !== "None" || mate.properties[key] !== undefined)) {
          return false;
        }
      }
      return true;
    });

    const filteredMateIds = filteredMates.map((mate:any) => mate.tokenId);
    return filteredMateIds;
  }

  const fetchBoxList = async () => {
    const nextMates = allMates.slice(boxList.length, boxList.length + 50);
    setBoxList(prev => [...prev, ...nextMates]);
  };

  useInfiniteScrolling({
    target: loadMoreRef, // 이 부분을 수정했습니다.
    fetchMore: fetchBoxList,
    hasMore: boxList.length < allMates.length,
  });

  useEffect(() => {
    fetchData();
  }, [filters]);

  const handleFilterChange = (option: any, action: any) => {
    const newFilters = { ...filters };
    if (option) {
      newFilters[action.name] = option.value;
    } else {
      delete newFilters[action.name];
    }
    setFilters(newFilters);
  };

  const generateOptions = (values: string[], key: string) => {
    return [
      { value: key, label: key, isNotFirst: false }, 
      ...values.map((value, index) => ({
        value: value,
        label: value,
        isNotFirst: true
      }))
    ];
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
                <Select 
                  name={part.key} 
                  options={generateOptions(part.value, part.key)} 
                  onChange={handleFilterChange}
                  defaultValue={generateOptions(part.value, part.key)[0]}
                  closeMenuOnSelect={false}
                  styles={{
                    valueContainer: (base) => ({
                      ...base,
                      backgroundColor: "#e73c83",
                      width: '100%',
                    }),
                    container: (base) => ({
                      ...base,
                      backgroundColor: "#e73c83",
                      padding: 3,
                    }),
                    control: (base) => ({
                      ...base,
                      backgroundColor: "#e73c83",
                      fontFamily: "Syne Mono",
                      fontSize: "16px",
                    }),
                    menu: (base) => ({
                      ...base,
                      backgroundColor: "#733ce7",
                      fontFamily: "Syne Mono",
                      fontSize: "16px",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: state.data.isNotFirst ? '#f7d602' : provided.color,
                      height: "24px",
                      padding: "2px 12px",  // padding도 조절해 보세요.
                    }),
                    singleValue: (provided, state) => ({
                      ...provided,
                      color: state.data.isNotFirst ? '#f7d602' : provided.color,
                    }),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ display: "flex", height: "30vh" }}>
            <img src="/desktop/faq/pray_for_dsc.webp" alt="" style={{ width: "100%" }}/>
          </div>
          <div id="galleryContents" style={{ 
              overflow:"scroll", 
              height: "60vh", 
              display: "flex", 
              flexWrap: "wrap", 
              justifyContent: "center",  
              backgroundColor: "#f7d602"  // 이 부분을 추가하세요.
          }}>
            {boxList.map(box => (
              <li key={box} className="box" style={{ flexDirection: "column"}}>
                <a href={`https://opensea.io/assets/klaytn/0xe47e90c58f8336a2f24bcd9bcb530e2e02e1e8ae/${box}`} target="_blank" rel="noopener noreferrer">
                  <img src={`https://storage.googleapis.com/dsc-mate/336/dscMate-${box}.png`} alt="" style={{ width: "100px"}}/>
                </a>
                {/* <span style={{ fontSize: "15px" }}>MATE #{box}</span> */}
              </li>
            ))}
            <div ref={loadMoreRef} /> {/* This is the loading trigger */}
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
            margin-top: -0.4%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
      `}</style>
    </Layout>
  );
}
