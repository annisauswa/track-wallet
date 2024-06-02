import Link from "next/link";
import Image from "next/image";
import ShoppingBag from "../../../public/shopping-bag.png";
import Bill from "../../../public/recurring-bill.png";
import Restaurant from "../../../public/restaurant.png";
import ExpenseHistory from "./expense-history";

const RecentHistory = () => {
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
    <div className="w-full pb-28">
      <ExpenseHistory />
      {/* <div className="flex justify-end px-7">
        <Link
          href="/transaction"
          className="rounded-full py-1.5 px-4 bg-white text-blackPrimary font-medium text-[13px]"
        >
          <button>See All</button>
        </Link>
      </div> */}
    </div>
  );
};

export default RecentHistory;
