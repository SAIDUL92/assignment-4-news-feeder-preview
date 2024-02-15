import { useContext } from "react";
import { NewsContext } from "../../context";
import { postPublishedDay } from "../../utils";
export default function NewsFeeder() {
  const { newsData } = useContext(NewsContext);

  const finalData = newsData.filter(
    (article) => article.description && article.urlToImage && article.author
  );
  let percentCount
  if (finalData.length === 0) {
    percentCount = Math.ceil(finalData.length * 0.0)
  }
  else if (finalData.length === 1) {
    percentCount = Math.ceil(finalData.length * 0.1)
  }
  else if (finalData.length === 2) {
    percentCount = Math.ceil(finalData.length * 0.1)
  }
  else if (finalData.length === 3) {
    percentCount = Math.ceil(finalData.length * 0.5)
  }
  else {
    percentCount = Math.ceil(finalData.length * 0.6)
  }

  const sideBarData = finalData.slice(percentCount);
  const mainData = finalData.slice(0, percentCount);


  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {/* left */}
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
          {
            mainData.length > 0 ?
              mainData.map((news, index) => {
                const date = new Date(news.publishedAt);
                const convertedDate = postPublishedDay(date)

                if (index === 0) {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="col-span-12 grid grid-cols-12 gap-4"
                    >
                      {/* info */}
                      <div className="col-span-12 lg:col-span-4">
                        <a href="#">
                          <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                            {news.title ?? news.title}
                          </h3>
                        </a>
                        <p className="text-base text-[#5C5955]">
                          {news.description ?? news.description}
                        </p>
                        <p className="mt-5 text-base text-[#5C5955]">{convertedDate}</p>
                      </div>
                      {/* thumb */}
                      <div className="col-span-12 lg:col-span-8">
                        <img
                          className="w-full max-h-[350px]"
                          src={news.urlToImage ?? news.urlToImage}
                          alt="thumb"
                        />
                        <p className="mt-5 text-base text-[#5C5955]">
                          {news.author ?? news.author}
                        </p>
                      </div>
                    </div>
                  );
                } else if (index === 1) {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
                    >
                      {/* info */}
                      <div className="col-span-12 md:col-span-6">
                        <a href="">
                          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                            {news.title ?? news.title}
                          </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                          {news.description ?? news.description}
                        </p>
                        <p className="mt-5 text-base text-[#5C5955]">{convertedDate}</p>
                      </div>
                      {/* thumb */}
                      <div className="col-span-12 md:col-span-6">
                        <img
                          className="w-full max-h-[350px]"
                          src={news.urlToImage ?? news.urlToImage}
                          alt="thumb"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="col-span-12 md:col-span-6 lg:col-span-4"
                    >
                      {/* info */}
                      <div className="col-span-12 md:col-span-4">
                        <a href="#">
                          <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                            {news.title ?? news.title}
                          </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                          {news.description ?? news.description}
                        </p>
                        <p className="mt-5 text-base text-[#94908C]">{convertedDate}</p>
                      </div>
                    </div>
                  );
                }
              }) : (<h3 className="col-span-12">No News Found</h3>)
          }
        </div>
        {/* right */}
        <div className="col-span-12 self-start xl:col-span-4">
          <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
            {
              sideBarData.length > 0 ?
                sideBarData.map((news, index) => {

                  const date = new Date(news.publishedAt);
                  const convertedDate = postPublishedDay(date)
                  if (index === 0) {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className="col-span-12 mb-6 md:col-span-8"
                      >
                        <img
                          className="w-full max-h-[350px]"
                          src={news.urlToImage ?? news.urlToImage}
                          alt="thumb"
                        />
                        {/* info */}
                        <div className="col-span-12 mt-6 md:col-span-4">
                          <a href="#">
                            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                              {news.title ?? news.title}
                            </h3>
                          </a>
                          <p className="text-base text-[#292219]">
                            {news.description ?? news.description}
                          </p>
                          <p className="mt-5 text-base text-[#94908C]">
                            {convertedDate}
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={crypto.randomUUID()} className="col-span-12 md:col-span-8">
                        {/* info */}
                        <div className="col-span-12 md:col-span-4">
                          <a href="#">
                            <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                              {news.title ?? news.title}
                            </h3>
                          </a>
                          <p className="text-base text-[#292219]">
                            {news.description ?? news.description}
                          </p>
                          <p className="mt-5 text-base text-[#94908C]">
                            {convertedDate}
                          </p>
                        </div>
                      </div>
                    );
                  }
                }) : (<h3 className="col-span-12">No SideBar Widget News Found</h3>)

            }
          </div>
        </div>
      </div>
    </main>
  );
}
