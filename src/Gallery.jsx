import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./context";
const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
}`;
console.log(import.meta.env.VITE_API_KEY);
const Gallery = () => {
    const { search } = useGlobalContext();
    const result = useQuery({
        queryKey: ["searchImg", search],
        queryFn: async () => {
            const res = await axios.get(`${url}${search}`);
            return res;
        },
    });
    if (result.isLoading) {
        return (
            <section>
                <h4 className="image-container">Loading....</h4>
            </section>
        );
    }
    if (result.isError) {
        return (
            <section>
                <h4 className="image-container">There Was an Error....</h4>
            </section>
        );
    }
    const results = result.data.data.results;
    if (results.length < 1) {
        return (
            <section>
                <h4 className="image-container">No results Found</h4>
            </section>
        );
    }

    return (
        <section className="image-container">
            {results.map((item) => {
                const url = item?.urls?.regular;
                return (
                    <img
                        src={url}
                        alt={item.alt_description}
                        key={item.id}
                        className="img"
                    />
                );
            })}
        </section>
    );
};

export default Gallery;
