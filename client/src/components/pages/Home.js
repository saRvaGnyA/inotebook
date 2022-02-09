import React from "react";

const Home = () => {
  return (
    <>
      <div class="flex flex-col lg:flex-row items-center lg:w-screen lg:h-full lg:justify-evenly my-8">
        <div>
          <div class="flex flex-col max-w-md px-4 pt-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div class="self-center text-xl font-normal text-gray-800 sm:text-2xl dark:text-white">
              Add a new note
            </div>
            <div class="p-6">
              <form action="#">
                <div class="flex flex-col mb-2">
                  <div class="relative ">
                    <input
                      type="text"
                      id="title"
                      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="title"
                      placeholder="Title"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-2">
                  <div class="relative ">
                    <input
                      type="text"
                      id="tag"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Tag"
                      name="tag"
                    />
                  </div>
                </div>
                <div class="flex flex-col mb-2">
                  <div class="relative ">
                    <input
                      type="text"
                      id="description"
                      class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Description"
                      name="description"
                    />
                  </div>
                </div>
                <div class="flex w-full mt-4">
                  <button
                    type="submit"
                    class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>eatwrawr</div>
      </div>
    </>
  );
};

export default Home;
