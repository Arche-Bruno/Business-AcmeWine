import React, { useContext, useState } from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

import { HeartIcon } from "./NextStyles/HeartIcon";
import { Button } from "@nextui-org/react";
import "./CardProduct.css";
import { ContextShoppingCart } from "../../Context/ContextShoppingCart/ContextShoppingCart";

const CardProduct = ({
  id,
  description,
  image,
  category,
  instructions,
  handleAdd,
  handleDelete,
  isActiveButton,
}) => {
  const { showIdCard } = useContext(ContextShoppingCart);
  const price = 10;

  const maxWords = 8; // Número máximo de palabras a mostrar

  const truncateInstructions = (text) => {
    const words = text.split(" ");
    const truncated = words.slice(0, maxWords).join(" ");
    return words.length > maxWords ? `${truncated}...` : truncated;
  };

  const handleBtnAdd = () => {
    handleAdd();
  };
  const handleBtnDelete = () => {
    handleDelete();
  };
  const handleShowCard = (id, value) => {
    showIdCard(id, value);
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] card-product "
      shadow="sm"
    >
      <CardBody>
        <div
          className="flex gap-1 items-start card-product"
          onClick={() => handleShowCard(id, true)}
        >
          <div className="relative col-span-6 md:col-span-4 ">
            <Image
              isZoomed
              alt="Album cover"
              className="object-cover sm:w-120 card-img"
              height={90}
              width={90}
              shadow="md"
              src={image}
            />
          </div>
          <div>
            {isActiveButton ? (
              <Button
                isIconOnly
                radius="full"
                variant="light"
                color="danger"
                aria-label="Like"
                onClick={() => handleBtnDelete()}
              >
                <HeartIcon
                  className={"[&>path]:stroke-transparent"}
                  fill={isActiveButton ? "currentColor" : "none"}
                />
              </Button>
            ) : (
              <Button
                isIconOnly
                radius="full"
                variant="light"
                color="danger"
                aria-label="Like"
                onClick={() => handleBtnAdd()}
              >
                <HeartIcon
                  className={""}
                  fill={isActiveButton ? "currentColor" : "none"}
                />
              </Button>
            )}
          </div>

          <div className="flex flex-col gap-4 col-span-6 md:col-span-8 ">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 .description">
                  {description}
                </h3>

                <h2 className="text-large font-medium mt-2">{category}</h2>
              </div>
            </div>
            
            <div className="flex flex-col mt-3 gap-1">
              <div className="flex gap-3">
                <p className="text-small">S/. {price}</p>
                <p className="text-money">S/. 20</p>
                <div className="text-discount">
                  <span>  -50% </span>
               </div>
              </div>
            </div>

            <div className="flex w-full items-center"></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProduct;
