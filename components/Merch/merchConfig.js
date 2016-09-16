import TwentyFourHundred from '../../static/24hundred.png';
import AllIn from '../../static/all_in_logo.png';
import MerchNow from '../../static/merchnow.png';
import JXR from '../../static/jxr.png';
import Impericon from '../../static/impericon.png';
import BigCartel from '../../static/bigcartel.png';

const merchStores = [
	{
	  name: "All In", 
   	link: "http://www.allinmerch.com/mm5/merchant.mvc?Store_Code=ALLIN&Screen=CTGY&Category_Code=VAN",
	  thumbnail: AllIn,
	  country: "United States"
	},{
	  name: "Merch Now", 
   	link: "http://smarturl.it/VannaMA",
	  thumbnail: MerchNow,
	  country: "United States"
	},{
		name: "Big Cartel",
		link: "http://vanna.bigcartel.com",
		thumbnail: BigCartel,
		country: "United States"
	},{
	  name: "24 Hundred",
	  link: " http://24hundred.net/collections/pure-noise-records/band-vanna",
	  thumbnail: TwentyFourHundred,
	  country: "Australia"
	},{
	  name: "JXR",
	  link: "http://www.shopjxr.com/category-s/181.htm",
	  thumbnail: JXR,
	  country: "Europe"
	},{
		name: "Impericon",
		link: "http://www.impericon.com/de/catalogsearch/result/?q=vanna+",
		thumbnail: Impericon,
		country: "Europe"
	}
];

export default merchStores;