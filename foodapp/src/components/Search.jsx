import { useEffect, useState } from "react";
export default function Search() {
  const [query, setQuery] = useState("pizza");
  
  useEffect(() => {
    function demo(){
        console.log("demo function executed")
    }
    demo()
  }, [query])
  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    </div>
  );
}
