import Link from "next/link";

export default function BreadcrumbPost({ breadcrumbs }) {
  const getBreadcrumb = () => {
    let breadcrumbObject = "";
    breadcrumbs.forEach((item, i) => {
      i++;
      const urlArray = item.url.split('/');
      var newUrl = "";
      urlArray.forEach((item, i) => {
        if(i > 3){
          newUrl = newUrl + '/' + item;
          newUrl = newUrl.endsWith('/') ? newUrl.slice(0, -1) : newUrl;
          if(newUrl === '') newUrl = "/";
        }
      })

      if (i > 1 && i < breadcrumbs.length) {
      
        breadcrumbObject += `<li class="inline-flex items-center"><svg class="w-6 h-6 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li><li class="inline-flex items-center" key=${i}><a href="${newUrl}" class="text-base inline-flex items-center font-semibold">${item.text}</a></li>`;
      
      } else if (i === breadcrumbs.length) {
      
        breadcrumbObject += `<li class="inline-flex items-center"><svg class="w-6 h-6 mx-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></li><li class="inline-flex items-center" key=${i}><span class="text-base font-bold text-skyblue">${item.text}</span></li>`;
      
      } else if (i === 1) {
      
        breadcrumbObject += `<li class="inline-flex items-center" key=${i}><a href="${newUrl}" class="text-base inline-flex items-center font-semibold">${item.text}</a></li>`;
      
      }

    });

    return breadcrumbObject;
  }


  return (
    <div className="breadcrumb_wrapper">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center" dangerouslySetInnerHTML={{ __html: getBreadcrumb() }} />
      </nav>
    </div>
  )
}
