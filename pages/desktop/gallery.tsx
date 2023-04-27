import { useState, useCallback } from 'react';
import Layout from "@/components/desktop/Layout";
import useInfiniteScrolling from '@/hooks/useInfiniteScrolling';

export default function Gallery() {
    const [boxList, setBoxList] = useState([0]);
    const [observerRef, setObserverRef] = useState<null | HTMLDivElement>(null);

    const getBoxList = async (n: number, length: number) => {
        await new Promise((resolve, reject) => {
          setTimeout(() => resolve(1), 200);
        });
      
        return Array(n)
          .fill(null)
          .map((v, i) => i + length);
      };

    const fetchBoxList = useCallback(async () => {
        // setIsLoading(true);
    
        const fetchedBoxList = await getBoxList(10, boxList.length);
    
        setBoxList((prev) => [...prev, ...fetchedBoxList]);
    
        // setIsLoading(false);
      }, [boxList]);

      useInfiniteScrolling({
        observerRef,
        fetchMore: fetchBoxList,
        hasMore: boxList.length < 9999,
      });

    return (
        <>
        <Layout>
            <div style={{ overflow:"scroll", height: "90vh", display: "flex", flexWrap: "wrap" }}>
                {boxList.map((box) => (
                      <>
                        <li className="box" style={{ flexDirection: "column" }}>
                          <img src={"https://storage.googleapis.com/dsc-mate/336/dscMate-"+box+".png"} alt="" style={{ width: "100px" }}  ref={setObserverRef}/>
                          <span style={{ fontSize: "15px" }}>DSC Mate #{box}</span>
                        </li>
                      </>
                ))}
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
              width: 200px;
              height: 200px;
              border-radius: 4px;

              margin-bottom: 20px;

              display: flex;
              justify-content: center;
              align-items: center;

              font-weight: bold;
              font-size: 2rem;
            }

            .box:nth-child(n) {
              background-color: var(--main-100);
            }
            .box:nth-child(2n) {
              background-color: var(--main-200);
            }
            .box:nth-child(3n) {
              background-color: var(--main-300);
            }
            .box:nth-child(4n) {
              background-color: var(--main-400);
            }
            .box:nth-child(5n) {
              background-color: var(--main-500);
            }
            .box:nth-child(6n) {
              background-color: var(--main-600);
            }
            .box:nth-child(7n) {
              background-color: var(--main-700);
            }
            .box:nth-child(8n) {
              background-color: var(--main-800);
            }
            .box:nth-child(9n) {
              background-color: var(--main-900);
            }
        `}</style>
        </>
    );
}
