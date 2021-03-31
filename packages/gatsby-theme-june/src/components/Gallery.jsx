import React from "react";
import Container from "./common/Container";
import Grid from "./common/Grid";
import TitleWrapper from "./common/TitleWrapper";
import Image from "./common/GatsbyImage";
import ButtonLink from "./common/ButtonLink";
import Button from "./common/Button";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";
import Modal from "./common/Modal";

const Gallery = ({
  data,
  button,
  items,
  thick,
  bg,
  wave,
  tilt,
  triangle,
  curve,
}) => {
  const [itemsShown, setItems] = React.useState(getItemsQty());
  const [itemsArr, setItemsArr] = React.useState([]);
  const [openModal, setOpenModal] = React.useState(false);
  const [imgId, setImgId] = React.useState(null);
  const [imgAlt, setImgAlt] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;

    mounted && handleLimit();

    return () => (mounted = false);
  }, [itemsShown]);

  React.useEffect(() => {
    let mounted = true;

    mounted && handleLimit();

    return () => (mounted = false);
  }, []);

  function getItemsQty() {
    if (window.screen.width < 768 && window.screen.width > 520) {
      return items + 1;
    } else {
      return items;
    }
  }

  function handleLimit() {
    const arr = data.images.slice(0, itemsShown);

    setItemsArr(arr);
  }

  function handleItemsQty() {
    let addOne = 0;
    if (window.screen.width < 768 && window.screen.width > 520) {
      addOne = 1;
    }

    setItems(itemsShown + items + addOne);
  }

  function handleLess() {
    if (window.screen.width < 768 && window.screen.width > 520) {
      setItems(items + 1);
    } else {
      setItems(items);
    }
  }

  function handleModal(id, alt) {
    setOpenModal(true);

    setImgId(id);
    setImgAlt(alt);
  }

  return (
    <Container
      thick={thick}
      bg={bg}
      wave={wave}
      tilt={tilt}
      triangle={triangle}
      curve={curve}
      id={data.anchor}
    >
      {openModal && (
        <Modal
          openModal={openModal}
          setOpenModal={setOpenModal}
          image={imgId}
          alt={imgAlt}
        />
      )}
      <TitleWrapper center>
        <small>{data.small}</small>
        <h2>{data.title}</h2>
      </TitleWrapper>
      <Grid columns={itemsShown} thick little>
        {itemsArr.map((item, key) => (
          <Image
            key={key}
            onClick={() => handleModal(item.img, item.alt)}
            image={item.img}
            alt={item.alt}
            cursor="true"
            shadow="true"
          />
        ))}
      </Grid>
      {button ? (
        data.images.length > itemsShown ? (
          <Button
            center
            onClick={handleItemsQty}
            transparent
            aria-label={data.buttonMore}
          >
            <RiAddFill /> {data.buttonMore}
          </Button>
        ) : (
          <Button
            center
            transparent
            onClick={handleLess}
            aria-label={data.buttonLess}
          >
            <RiSubtractFill /> {data.buttonLess}
          </Button>
        )
      ) : (
        <ButtonLink
          to={`/${data.slug}`}
          title={data.buttonMore}
          aria-label={data.buttonMore}
        >
          {data.buttonLabel}
        </ButtonLink>
      )}
    </Container>
  );
};

export default Gallery;
