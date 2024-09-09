import CardData from "@/public/assets/data/card_data.json";
import { MoveUpRight } from "lucide-react";
export default function IdecCard() {
  return (
    <div className="mb-12">
      <div className="flex flex-col border border-gray-300 bg-white">
        <ul className="flex w-full align-baseline text-left flex-wrap">
          {CardData.CardList.map((data, index) => (
            <li
              className="cards py-10 px-6 lg:px-10 border-b lg:border-r w-full lg:w-1/3 flex flex-col gap-2"
              key={`card-${index}`}
            >
              <h3 className="font-bold mb-4 text-[20px] lg:text-[32px] inline-flex leading-none">
                <span>{data.card_title}</span>
                <MoveUpRight className="font-bold h-8 w-8 " />
              </h3>

              <p>{data.card_description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
