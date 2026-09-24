import {Heros} from "./components/Heros.tsx";
import {LibraryServices} from "./components/LibraryServices.tsx";
import {ExploreTopBooks} from "./components/ExploreTopBooks.tsx";
import {Carousel} from "./components/Carousel.tsx";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBooks/>
            <Carousel/>
            <Heros/>
            <LibraryServices/>
        </>
    )
}