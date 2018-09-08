import companyData from './sample-data';

export default function()
{

  const CompanyInfo = JSON.parse(companyData).companyInfo;
  return CompanyInfo;

}
