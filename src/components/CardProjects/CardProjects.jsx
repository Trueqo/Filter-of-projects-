
import React from "react";
import technologies from "../../data/technologies";
import Modal from "../Modal/Modal"

const CardProjects = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-2">
      {technologies.map((datos) => {
        return (
          <div className=" flex flex-col  items-center mt-12 mb-5 ">
            <div className="md:h-[8rem] md:w-[15rem]  w-60 h-36   rounded-t-lg border-2">
              
            </div>

            <div className="w-60 h-46 md:h-[5rem] md:w-[15] pb-4 bg-white rounded-b-lg flex justify-between items-center">
              <h1 className="pl-4 font-akshar text-xl">{datos.project}</h1>
              <Modal id={datos.id} title={datos.project}  description={datos.description} img={datos.img}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProjects;
