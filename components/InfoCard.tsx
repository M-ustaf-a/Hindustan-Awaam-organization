import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function InfoCard() {
  return (
    <Card className="w-[1150px] p-10 mb-10">
      <CardHeader>
        <CardTitle>Hindustan organization</CardTitle>
        <CardDescription>Organizations are built on trust.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <img src="/logo.jpg" alt="logo" className="w-52 h-42 mb-10" />
        </div>
      </CardContent>
      <p>
        Hindustan Awaam Organization is a dynamic and forward-thinking
        initiative focused on addressing the needs of underprivileged and
        marginalized communities across India. Established with a mission to
        promote social justice, equality, and empowerment, the organization
        strives to uplift those who are often left behind in society due to
        economic, social, or educational barriers. By focusing on key areas such
        as education, healthcare, women’s empowerment, and social welfare,
        Hindustan Awaam Organization aims to create lasting, positive change in
        the lives of the most vulnerable. One of the core pillars of the
        organization’s work is education. Hindustan Awaam Organization believes
        that education is the foundation of empowerment and societal progress.
        It runs a variety of educational programs aimed at providing children
        from disadvantaged backgrounds with access to quality learning
        opportunities. Through scholarships, free tuition programs, and
        vocational training, the organization works to bridge the gap between
        the privileged and the underprivileged, ensuring that every child has
        the chance to realize their full potential. By investing in education,
        Hindustan Awaam Organization seeks to break the cycle of poverty and
        provide a pathway for future generations to thrive. In addition to
        education, the organization is deeply committed to improving healthcare
        access in rural and underserved areas. Hindustan Awaam Organization runs
        health camps, mobile clinics, and awareness drives aimed at addressing
        key health challenges such as malnutrition, maternal health, and chronic
        diseases. By providing free or affordable medical services, the
        organization ensures that vulnerable populations have the care they need
        to lead healthy, productive lives. Women’s empowerment is another key
        focus area for Hindustan Awaam Organization. The organization is
        dedicated to uplifting women by providing them with the resources,
        skills, and support they need to become financially independent and
        socially empowered. Through self-help groups, micro-financing
        initiatives, and skill development workshops, the organization
        encourages women to participate in economic activities, enhancing their
        role within the community and the larger economy. Hindustan Awaam
        Organization recognizes that empowering women has a transformative
        impact not only on their lives but also on their families and society as
        a whole. Hindustan Awaam Organization also focuses on community
        development, working to create sustainable, inclusive solutions to
        issues such as housing, sanitation, and employment. The organization
        collaborates with local governments, NGOs, and other stakeholders to
        implement projects that improve the quality of life in both urban and
        rural areas. Whether it’s building clean water systems, promoting
        renewable energy sources, or advocating for better housing conditions,
        Hindustan Awaam Organization is committed to holistic development that
        benefits entire communities. The organization’s work is driven by a
        strong belief in the power of collective action. Through community
        mobilization and advocacy, Hindustan Awaam Organization aims to raise
        awareness about social justice issues and drive policy changes that
        benefit the marginalized. By giving a voice to the voiceless and
        advocating for systemic change, the organization plays an important role
        in the broader struggle for equality and human rights in India. Overall,
        Hindustan Awaam Organization is more than just a charitable entity; it
        is a movement for sustainable development, human rights, and social
        equity. Its multi-faceted approach to tackling poverty, inequality, and
        social exclusion makes it a vital force for change in India’s
        socio-economic landscape. Through its unwavering commitment to the
        well-being of all citizens, the organization continues to inspire hope
        and provide opportunities for those who need them most.
      </p>
      <CardFooter className="flex justify-between">
        <form action="/info">
        </form>
      </CardFooter>
    </Card>
  );
}
