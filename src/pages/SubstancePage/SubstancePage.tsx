// import "./SubstancePage.sass"
// import {Dispatch, useEffect, useState} from "react";
// import {Link, useParams} from "react-router-dom";
// import {iSubstancesMock, requestTime} from "../../utils/consts";
// import {Substance} from "../../utils/types";
// import mockImage from "/src/assets/mock.png"
//
//
//
// const SubstancePage = ({ selectedSubstance, setSelectedSubstance }: { selectedSubstance:Substance | undefined, setSelectedSubstance: Dispatch<Substance| undefined>}) => {
//
//     const { id } = useParams<{id: string}>();
//
//     const [isMock, setIsMock] = useState<boolean>(false);
//
//     useEffect(() => {
//         fetchData()
//     }, [])
//
//     if (id == undefined){
//         return;
//     }
//
//     const fetchData = async () => {
//
//         try {
//             const response = await fetch(`http://127.0.0.1:8000/api/services/${id}`, {
//                 method: "GET",
//                 signal: AbortSignal.timeout(requestTime)
//             });
//
//             if (!response.ok)
//             {
//                 CreateMock()
//                 return;
//             }
//
//             const service: Substance = await response.json()
//
//             setSelectedSubstance(service)
//
//             setIsMock(false)
//
//         } catch
//         {
//             CreateMock()
//         }
//
//     };
//
//     const CreateMock = () => {
//         setSelectedSubstance(iSubstancesMock.find((service:Substance) => service?.id == parseInt(id)))
//         setIsMock(true)
//     }
//
//     const img = `http://127.0.0.1:8000/api/services/${id}/image/`
//
//     if (selectedSubstance == undefined) {
//         return (
//             <div className="page-details-wrapper">
//
//                 <Link className="return-link" to="/">
//                     Назад
//                 </Link>
//
//             </div>
//         )
//     }
//
//     return (
//         <div className="page-details-wrapper">
//
//             <Link className="return-link" to="/">
//                 Назад
//             </Link>
//
//             <div className="left">
//
//                 <img src={isMock ? mockImage : img}  alt=""/>
//
//             </div>
//
//             <div className="right">
//
//                 <div className="info-container">
//
//                     <h2 className="name">{selectedSubstance.name}</h2>
//
//                     <br />
//
//                     <span>{selectedSubstance.description}</span>
//
//
//                 </div>
//
//             </div>
//
//         </div>
//     )
// }
//
// export default SubstancePage;
//
import "./SubstancePage.sass";
import { Dispatch, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { iSubstancesMock } from "../../utils/consts"; // Remove requestTime from import statement
import { Substance } from "../../utils/types";
import mockImage from "../../assets/mock.png";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";

const SubstancePage = ({
  selectedSubstance,
  setSelectedSubstance,
}: {
  selectedSubstance: Substance | undefined;
  setSelectedSubstance: Dispatch<Substance | undefined>;
}) => {
  const { id } = useParams<{ id: string }>();
  const [isMock, setIsMock] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  if (id === undefined) {
    return (
      <div className="page-details-wrapper">
        <Link className="return-link" to="/">
          Назад
        </Link>
      </div>
    );
  }

  const fetchData = async () => {
    try {
      const substance = iSubstancesMock.find(
        (service) => service.id === parseInt(id)
      );
      if (substance) {
        setSelectedSubstance(substance);
        setIsMock(false);
      } else {
        createMock();
      }
    } catch {
      createMock();
    }
  };

  const createMock = () => {
    const substance = iSubstancesMock.find(
      (service) => service.id === parseInt(id)
    );
    if (substance) {
      setSelectedSubstance(substance);
      setIsMock(true);
    }
  };

  let img;
  if (selectedSubstance) {
    // Get the image path based on the id
    switch (selectedSubstance.id) {
      case 1:
        img = image1;
        break;
      case 2:
        img = image2;
        break;
      case 3:
        img = image3;
        break;
      case 4:
        img = image4;
        break;
      case 5:
        img = image5;
        break;
      default:
        img = mockImage;
        break;
    }
  }

  if (!selectedSubstance) {
    return (
      <div className="page-details-wrapper">
        <Link className="return-link" to="/">
          Назад
        </Link>
      </div>
    );
  }

  return (
    <div className="page-details-wrapper">
      <Link className="return-link" to="/">
        Назад
      </Link>

      <div className="left">
        <img src={isMock ? mockImage : img} alt="" />
      </div>

      <div className="right">
        <div className="info-container">
          <h2 className="name">{selectedSubstance.name}</h2>
          <br />
          <span>{selectedSubstance.description}</span>
        </div>
      </div>
    </div>
  );
};

export default SubstancePage;
