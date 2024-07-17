import React, { Suspense, memo } from "react";
import { AppHeader } from "./AppHeader";
import { GlobalContext } from "../context/Global/GlobalContext";
import { Spinner } from "../assets/svgs/Spinner";

const navigation = []
const MainAppWrapper = ({ children }) => {
  const { state, dispatch } = React.useContext(GlobalContext);

  return (
    <div id="admin_wrapper" className={`flex w-full max-w-full`}>
        <AppHeader />
      <div className={`flex min-h-screen w-full`}>
        <div className={`mb-0 w-full overflow-hidden mx-auto bg-[#fff] p-3 ${state?.isOpen ? "w-full md:p-8" : " md:p-8"}`}>
          {/* <TopHeader /> */}
          <Suspense
            fallback={
              <div
                className={`flex h-screen w-full  items-center justify-center`}
              >
                <Spinner size={100} color="#2CC9D5" />
              </div>
            }
          >
            <div className={`w-full bg-[#fff] h-full overflow-y-auto overflow-x-hidden mt-6 ${!state?.isOpen && "md:px-1"}`}>
              {children}
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default memo(MainAppWrapper);

