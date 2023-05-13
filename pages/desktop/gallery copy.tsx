import { useRef, useState, useEffect } from 'react';
import Layout from "@/components/desktop/Layout";
import useInfiniteScrolling from '@/hooks/useInfiniteScrolling';
import Select from 'react-select';

export default function Gallery() {
    const [boxList, setBoxList] = useState<number[]>([]);
    const [allMates, setAllMates] = useState<number[]>([]);
    const observerRef = useRef<HTMLDivElement>(null);
    const [filters, setFilters] = useState<{ key: string; value: string }[]>([
      { key: "Face", value: "Robot" }
    ]);
    const [mateParts, setMateParts] = useState<{ key: string; value: string[] }[]>([]);

    const fetchData = async () => {
      try {
        // `mates.json` 파일에서 데이터를 가져옵니다.
        const matesRes = await fetch('/data/mates.json');
        const matesData = await matesRes.json();
  
        // `mateParts.json` 파일에서 데이터를 가져옵니다.
        const matePartsRes = await fetch('/data/mateParts.json');
        const matePartsData = await matePartsRes.json();
  
        // `mateParts.json` 파일에서 가져온 데이터를 `mateParts` 상태값에 저장합니다.
        const partsData = [];
        for (const part of matePartsData.collection) {
            for (const key in part) {
                partsData.push({ key: key, value: part[key] });
            }
        }
        setMateParts(partsData);

        // 필터 적용
        const filteredMates = applyFilter(matesData.collection, filters);

        // 필터링된 메이트의 전체 목록을 저장합니다.
        setAllMates(filteredMates);

        // 첫 50개의 메이트만 로드합니다.
        setBoxList(filteredMates.slice(0, 50));
  
      } catch (error) {
        console.error(error);
      }
    };

    const applyFilter = (mates, filters) => {
        const filteredMates = mates.filter((mate:any) => {
            for (const filter of filters) {
                if (mate.properties[filter.key] == filter.value) {
                    return true;
                }
            }
            return false;
        });

        const filteredMateIds = filteredMates.map((mate:any) => mate.tokenId);
        return filteredMateIds;
    }

    const resetFilters = () => {
      setFilters([]);
      fetchData();
    }

    const fetchBoxList = async () => {
      // 전체 mates에서 현재 보이는 mates 이후의 50개를 가져옵니다.
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

    return (
      <Layout>
        <div>
          <Select
            options={mateParts}
            onChange={(selected: any) => setFilters([{ key: selected.key, value: selected.value }])}
          />
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
        <div>
          {boxList.map((id) => (
            <div key={id}>
              <img src={`/mates/${id}.png`} />
            </div>
          ))}
          <div ref={observerRef}></div>
        </div>
      </Layout>
    );
}