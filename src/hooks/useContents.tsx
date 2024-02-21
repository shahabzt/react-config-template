import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useLocation } from "react-router-dom";

const useContent = () => {
  const activeIndex = useSelector((state: RootState) => state);
  const location = useLocation();
  const policyActiveIndex = useSelector((state: RootState) => state);

  switch (activeIndex) {
    default:
      return;
  }
};
export default useContent;
