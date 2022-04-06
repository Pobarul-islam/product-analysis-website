import { useEffect, useState } from "react"

const useRating = () => {
    const [ratingData, setRatingData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data=>setRatingData(data))
    }, [])
    return [ratingData, setRatingData];

}
export default useRating;