export interface CarouselContext<Item> {
    $implicit: Item;
    appCarousel: Item[];
    index: number;
    back: () => void;
    next: () => void;
}
