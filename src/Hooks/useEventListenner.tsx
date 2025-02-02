import { useState, useEffect } from "react";
export function UseEventListenner(setCurrentPage: any) {
  const [fetching, setFetching] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", scrollPage);
    return () => document.removeEventListener("scroll", scrollPage);
  }, [fetching]);

  const scrollPage = () => {
    if (fetching) return;
    const scrollTop = window.scrollY;
    const docHeight = document.body.offsetHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = scrollTop / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent * 100);
    if (scrollPercentRounded > 80) setCurrentPage((perv: number) => perv + 1);
  };

  return { fetching: fetching, setFetching: setFetching };
}
