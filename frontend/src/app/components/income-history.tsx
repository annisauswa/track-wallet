import Link from "next/link";
import Image from "next/image";
import Salary from "../../../public/salary-green.png";
import PassiveIncome from "../../../public/briefcase.png";
import Others from "../../../public/salary-black.png";

const IncomeHistory = () => {
  const histories = [
    {
      link: "!#",
      img: Salary,
      title: "Monthly Salary",
      category: "Salary",
      price: "+ Rp5.000.000",
      date: "14/06/2023",
    },
    {
      link: "!#",
      img: PassiveIncome,
      title: "Dropshipping",
      category: "Passive Income",
      price: "+ Rp3.000.000",
      date: "14/06/2023",
    },
    {
      link: "!#",
      img: Others,
      title: "Dividend",
      category: "Others",
      price: "+ Rp2.000.000",
      date: "14/06/2023",
    },
  ];

  const getCategoryBackgroundColor = (category: string) => {
    switch (category) {
      case "Salary":
        return "#CFFAEA";
      case "Passive Income":
        return "#E5EFFF";
      case "Others":
        return "#B8B8B8";
    }
  };

  return (
    <div className="w-full pb-7">
      <div className="w-full flex flex-row justify-between items-center pb-4">
        <h1 className="text-[16px]">Income History</h1>
      </div>
      <div className="flex flex-col space-y-[16px]">
        {histories.map((history, index) => (
          <Link
            href={history.link}
            key={index}
            className="bg-white py-4 px-5 flex items-center justify-between rounded-[24px]"
          >
            <div className="flex items-center space-x-3">
              <div
                style={{
                  backgroundColor: getCategoryBackgroundColor(history.category),
                }}
                className="p-2.5 rounded-[15px]"
              >
                <Image
                  src={history.img}
                  alt="History icon"
                  width={31}
                  height={32}
                  className="w-8"
                />
              </div>
              <div>
                <p className="text-[15px] text-blackPrimary mb-1.5">
                  {history.title}
                </p>
                <p className="text-[#91919F] text-[13px]">{history.category}</p>
              </div>
            </div>
            <div className="text-right right-0">
              <p className="text-[14px] text-[#00A86B] mb-1.5">
                {history.price}
              </p>
              <p className="text-[#91919F] text-[12px]">{history.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IncomeHistory;
