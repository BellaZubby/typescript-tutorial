export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
  }

  // This defines the type of each element within the object for the mapping done in benefit page
  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }
  // this defines the type of object for the classes page.
  export interface ClassType {
    name: string;
    // the question mark infront of the description makes it optional for display
    description?: string;
    image: string
  }