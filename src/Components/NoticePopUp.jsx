


import { CheckIcon} from '@heroicons/react/outline'

import React, { Fragment, useEffect } from "react";
import Portal from "./Portal";

const NoticePopUp = ({ description, explainerText, onCancel, onSubmit }) => {
  useEffect(() => {});

  return (
    <Fragment>
      <div onClick={onCancel} className="fixed inset-0 bg-black opacity-50" />
      <Portal>
        <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />
          <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div class="md:flex items-center">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
            </div>
              <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p class="font-bold">{description}</p>
                <p class="text-sm text-gray-700 mt-1">
                  {explainerText}
                </p>
              </div>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
              {/* <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                Delete Account
              </button> */}
              <button
                class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </Fragment>
  );
};

export default NoticePopUp;

