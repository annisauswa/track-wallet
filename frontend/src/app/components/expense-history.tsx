import Link from "next/link";
import Image from "next/image";
import ShoppingBag from "../../../public/shopping-bag.png";
import Bill from "../../../public/recurring-bill.png";
import Restaurant from "../../../public/restaurant.png";

const ExpenseHistory = () => {
  const histories = [
    {
      link: "!#",
      img: ShoppingBag,
      title: "Buy vegetables",
      category: "Shopping",
      price: "- Rp30.000",
      date: "14/06/2023",
    },
    {
      link: "!#",
      img: Bill,
      title: "Disney+",
      category: "Subscription",
      price: "- Rp30.000",
      date: "14/06/2023",
    },
    {
      link: "!#",
      img: Restaurant,
      title: "Buy nasi uduk",
      category: "Food",
      price: "- Rp30.000",
      date: "14/06/2023",
    },
  ];

  const getCategoryBackgroundColor = (category: string) => {
    switch (category) {
      case "Shopping":
        return "#FCEED4";
      case "Subscription":
        return "#E5EFFF";
      case "Food":
        return "#FDD5D7";
    }
  };

  return (
    <div className="w-full pb-7">
      <div className="w-full flex flex-row justify-between items-center pb-4">
        <h1 className="text-[16px]">Expense History</h1>
      </div>
      <div className="flex flex-col space-y-4">
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
              <p className="text-[14px] text-[#FD3C4A] mb-1.5">
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

export default ExpenseHistory;
