import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List, ListItem } from "./ImageGallery.styled"

export const ImageGallery = ({data}) => {
    return (
        <List>
            {data.map(({id, webformatURL, largeImageURL, tags}) => (
                <ListItem key={id}>
                    <ImageGalleryItem url={webformatURL} src={largeImageURL} alt={tags[0]} />
                </ListItem>
            ))}
        </List>
    )
}