import React, { useEffect, useState } from "react";
export default function useLoader(data) {
    const [appLoaded, setappLoaded] = useState(false)
    useEffect(() => {
        if (data && data.data) {
          setappLoaded(true)
        }
      }, [data])
      return { appLoaded};
}
