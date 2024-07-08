import Templates from '@/app/(data)/Templates';
import TemplateCard from './TemplateCard';
import { useEffect, useState } from 'react';

export interface TEMPLATE {
  name: string;
  desc: string;
  slug: string;
  category: string;
  icon: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateList({ userSearchInput }: string) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = Templates.filter((template: TEMPLATE) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-col-3 lg:grid-col-4 gap-5 p-10">
      {templateList.map((template: TEMPLATE) => (
        <div
          key={template.slug}
          className="bg-white p-5 rounded-md shadow-md my-5"
        >
          <TemplateCard {...template} />
        </div>
      ))}
    </div>
  );
}
export default TemplateList;
