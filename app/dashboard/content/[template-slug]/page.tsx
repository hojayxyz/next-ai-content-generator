'use client';

import Templates from '@/app/(data)/Templates';
import { TEMPLATE } from '../../_components/TemplateList';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = Templates.find(
    (item) => item.slug === props.params['template-slug']
  );

  const generateAIContent = (formData: any) => {
    // Generate AI content based on form data
    console.log(formData);
  };

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
        </Button>
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
        {/* Form Section */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => console.log(v)}
        />
        {/* Output Section */}
        <div className="lg:col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
}
export default CreateNewContent;
