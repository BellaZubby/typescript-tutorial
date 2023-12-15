import HText from "@/shared/HText";
import {BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
Benefit
// Tells typescript that this is an array of objects'
const benefits: Array<BenefitType> =[
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: 'State of the Art Facilities',
        description: 
        'We offer a state of the art services. Best in the state and second to none. You will leave without regrets!'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: 
        'We offer a state of the art services. Best in the state and second to none. You will leave without regrets!'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: 'Expert and Pro Trainers',
        description: 
        'We offer a state of the art services. Best in the state and second to none. You will leave without regrets!'
    }
];

// creating the motin effects
const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}
const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
        id='benefits'
        className='mx-auto min-h-full w-5/6 py-20'
    >
        <motion.div
            // for highlighting the meun depending on the page in viewport
             onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* Header */}
            <motion.div 
                 initial='hidden'
                 whileInView='visible'
                 viewport={{once:true, amount:0.5}}
                transition={{duration: 0.5}}
             // this sets initial and final keyword
                 variants = {{
                 hidden: { opacity: 0, x:-50},
                 visible: { opacity: 1, x: 0},
                }}
                className="md:my-5 md:w-3/5"
            >
               <HText>MORE THAN JUST A GYM.</HText> 
               <p className="my-5 text-sm">
                We provide world class fitness equipment, trainers and classes
                to get you to your ultimate fitness goals with ease. We provide true
                care into each and every member.
               </p>
            </motion.div>
            {/* benefits */}
            <motion.div 
            className="md:flex items-center justify-between gap-8 mt-5"
            initial='hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.5}}
            variants={container}
            >
                {benefits.map(
                    (benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    )
                )}
            </motion.div>
            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex ">
                {/* graphic */}
                <img
                    className="mx-auto"
                    alt="benefits-page-graphic"
                    src={BenefitsPageGraphic}
                />

                {/* description */}
                <div>
                    {/* title */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                 initial='hidden'
                                 whileInView='visible'
                                 viewport={{once:true, amount:0.5}}
                                transition={{duration: 0.5}}
                             // this sets initial and final keyword
                                 variants = {{
                                 hidden: { opacity: 0, x:50},
                                 visible: { opacity: 1, x: 0},
                                }}
                            >
                                <HText> 
                                    {/* {" "} this forces a space*/}
                                    MILLIONS OF HAPPY MEMEBERS GETTING{" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* description */}
                        <motion.div
                             initial='hidden'
                             whileInView='visible'
                             viewport={{once:true, amount:0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                         // this sets initial and final keyword
                             variants = {{
                             hidden: { opacity: 0, x:50},
                             visible: { opacity: 1, x: 0},
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Corporis itaque fuga nemo esse quam blanditiis explicabo. 
                                Deleniti incidunt tempora sunt, nisi molestiae tempore ad vel minus quae, 
                                a totam temporibus id dolores eveniet corporis quisquam eligendi officiis obcaecati dolor. 
                                Deleniti incidunt tempora sunt, nisi molestiae tempore ad vel minus quae, 
                                a totam temporibus id dolores eveniet corporis quisquam eligendi officiis obcaecati dolor. 
                            </p>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Sint voluptatem tenetur recusandae! Voluptatibus aliquid impedit velit suscipit dignissimos, 
                                dolorem asperiores, quo, voluptas laboriosam magnam ex et cupiditate earum doloremque! Nihil, 
                                placeat tempora? </p>
                        </motion.div>
                    {/* button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits