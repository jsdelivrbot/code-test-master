import companyData from './sample-data';
//Author Ram Date: 7/10/2018
//For fetching the company info
export default function()
{

  const CompanyInfo = JSON.parse(companyData).companyInfo;
  return CompanyInfo;

}
