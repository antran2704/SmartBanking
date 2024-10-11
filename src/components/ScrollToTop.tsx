"use client";

import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";

function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 100}>
        {(transitionStyles) => (
          <Button
            style={transitionStyles}
            radius={"lg"}
            className="bg-accent text-white hover:bg-primary transition-all ease-linear duration-100"
            onClick={() => scrollTo({ y: 0 })}>
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}

export default ScrollToTop;
