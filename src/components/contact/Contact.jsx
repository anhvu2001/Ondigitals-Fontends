import React, { useEffect } from "react";
import ContactUsForm from "./components/ContactUsForm/ContactUsForm";
import ContactInfo from "./components/ContactInfo/ContactInfo";
import { useBoundStore } from "@/store/useBoundStore";

export default function Contact() {
  //Khi tới các section homepage, cho ẩn header chính để hiện section header
  //nên cần set lại xuất hiện
  const setToLight = useBoundStore((state) => state.setToLight);
  const setHeaderCanChangeColor = useBoundStore(
    (state) => state.setHeaderCanChangeColor
  );
  const setBottomNavIsShown = useBoundStore(
    (state) => state.setBottomNavIsShown
  );
  const setHeaderStickyState = useBoundStore(
    (state) => state.setHeaderStickyState
  );
  const setChangeStickyIsAllowed = useBoundStore(
    (state) => state.setChangeStickyIsAllowed
  );

  useEffect(() => {
    setHeaderStickyState(false);
    setChangeStickyIsAllowed(true);
    const header = document.querySelector(".main-header-g");
    if (header) {
      setHeaderCanChangeColor();
      setToLight();
      setBottomNavIsShown(true);
      header.classList.remove("hide");
    }
  }, []);

  return (
    <>
      <ContactUsForm />
      <ContactInfo />
    </>
  );
}
