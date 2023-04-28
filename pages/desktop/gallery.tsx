import { useState, useCallback, useEffect } from 'react';
import Layout from "@/components/desktop/Layout";
import useInfiniteScrolling from '@/hooks/useInfiniteScrolling';

export default function Gallery() {
    const [boxList, setBoxList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 , 12, 13, 14 ,15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]);
    const [observerRef, setObserverRef] = useState<null | HTMLDivElement>(null);
    const [filters, setFilters] = useState<{ key: string; value: string }[]>([
      { key: "Face", value: "Robot" }
    ]);
    const mate:number[] = [];

    const fetchData = async () => {
      try {
        // `mates.json` 파일에서 데이터를 가져옵니다.
        const matesRes = await fetch('/data/mates.json');
        const matesData = await matesRes.json();
  
        // `mateParts.json` 파일에서 데이터를 가져옵니다.
        const matePartsRes = await fetch('/data/mateParts.json');
        const matePartsData = await matePartsRes.json();
        const partsData = matePartsData.collection.map((v:any, i:any) => (v));
        console.log(partsData[0])
  
        // `mates.json` 파일과 `mateParts.json` 파일에서 가져온 데이터를 합쳐서 `isData` 상태값에 저장합니다.
        const data = matesData.collection.map((v:any, i:any) => (mate.push(v.tokenId)));

        const filteredMates = matesData.collection.filter((mate:any) => {
          for (const filter of filters) {
            if (mate.properties[filter.key] == filter.value) {
              return false;
            }
          }
          return true;
        });

        const filteredMateIds = filteredMates.map((mate:any) => mate.tokenId);
  
      } catch (error) {
        console.error(error);
      }
    };

    function resetFilters() {
      setFilters([]);
    }

    useEffect(() => {
      fetchData();
    }, []);
    
    const getBoxList = async (n: number, length: number) => {
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(1), 200);
        });

        return Array(n)
          .fill(null)
          .map((v, i) => i + length);
      };

    const fetchBoxList = useCallback(async () => {
    
        const fetchedBoxList = await getBoxList(3, boxList.length);
    
        setBoxList((prev) => [...prev, ...fetchedBoxList]);
    
      }, [boxList]);

      useInfiniteScrolling({
        observerRef,
        fetchMore: fetchBoxList,
        hasMore: boxList.length < 9999,
      });

    return (
        <>
        <Layout>
          <div style={{ display: "flex" }}>
              <div style={{ width: "20%", background: "#E73C83" }}>
                <div style={{ display: "flex", height: "15vh" }}>
                  <img src="/desktop/gallery/gallery.webp" alt="" style={{ width: "100%" }}/>
                </div>
              </div>
              <div style={{ width: "80%" }}>
                <div style={{ display: "flex", height: "30vh" }}>
                    <img src="/desktop/faq/pray_for_dsc.webp" alt="" style={{ width: "100%" }}/>
                </div>
                <div style={{ overflow:"scroll", height: "60vh", display: "flex", flexWrap: "wrap" }}>
                    {boxList.map((box) => (
                        <>
                          <li key={box} className="box" style={{ flexDirection: "column", width: "16.6666%" }}>
                            <img src={"https://storage.googleapis.com/dsc-mate/336/dscMate-"+box+".png"} alt="" style={{ width: "100px", borderRadius: "10px" }}  ref={setObserverRef}/>
                            <span style={{ fontSize: "15px" }}>DSC Mate #{box}</span>
                          </li>
                        </>
                    ))}
                </div>
              </div>
            </div>
        </Layout>
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
        </>
    );
}
