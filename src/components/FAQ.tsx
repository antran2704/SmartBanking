"use client";

import { Accordion } from "@mantine/core";
import useScrollActiveNavbar from "~/app/hooks/useScrollActiveNavbar";

const groceries = [
  {
    value:
      "What is the difference between Draft and a traditional bank account?",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    value: "Who can open a Draft account?",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    value: "What if I withdraw money abroad?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    value: "Can I cancel my subscrption or switch to another plan anytime?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
  {
    value: "What happens if I withdraw more than $250?",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

const FAQ = () => {
  const { ref } = useScrollActiveNavbar({ path: "#faq" });

  return (
    <div ref={ref} id="faq" className="container px-5 py-10">
      <div className="flex flex-col items-center">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-primary">
          Frequently <span className="text-accent">asked questions</span>
        </h2>
        <h3 className="md:w-1/2 text-lg texxt-[#16194F] text-center pt-5">
          If you are not sure whether Draft is suitable is for you or not, do
          not worry. We are here to explain everything you might want to know
        </h3>
      </div>
      <div className="py-10">
        <Accordion variant="separated" radius="lg">
          {groceries.map((item) => (
            <Accordion.Item
              key={item.value}
              value={item.value}
              className="bg-white shadow-sm"
            >
              <Accordion.Control className="text-lg font-bold">
                {item.value}
              </Accordion.Control>
              <Accordion.Panel>{item.description}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
