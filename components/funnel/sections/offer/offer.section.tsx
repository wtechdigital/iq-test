import { useRouter } from "next/navigation";
import {FunnelButton, FunnelSelectChoiceButton} from "@/components/funnel/components";
import {FunnelScreen, getStepNumber, routes} from "@/components/funnel/helpers";
import {useState} from "react";
import GuidingArrow from "@/assets/guidingArrow";
import content from "./content.json";

interface Props {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Offer = ({ setStep }: Props) => {
    const router = useRouter()

    const plans = [1.0, 5.0, 9.0, 13.21];
    const [selectPlan, setSelectPlan] = useState(plans[plans.length -1])
    const handleSubmit = () => {
        router.push(`/${routes.intro}`);
        const stepNumber = getStepNumber(
            routes.intro as FunnelScreen,
        );
        setStep(stepNumber || 1);
    };

    return (
        <div className='px-6'>
            <p className="lg:mt-4 text-xl lg:text-2xl font-semibold text-center mb-4">
                {/*Try Envest for 1 week.*/}
                {content.title}
            </p>
            <p className="text-center lg:text-lg">
                {/*We’ve helped thousands of people achieve their financial goals, and we want to help you too.*/}
                {content.subtitle}
                <br/>
                {/*Please pick an amount that’s reasonable for you.*/}
                {content.subtitle2}
            </p>

            <p className="font-bold text-center pt-10  pb-6 w-full">
                {/*Choose a price for your 7-day trial.*/}
                {content.subtitle3}
            </p>


            <div className="grid grid-cols-4 gap-4 mb-4">
                {plans.map((plan, i) => (
                    <div key={i}>
                        <FunnelSelectChoiceButton
                            isActive={selectPlan === plan}
                            value={`$${plan.toFixed(2)}`}
                            onClick={()=>setSelectPlan(plan)}
                        />
                    </div>
                ))}
            </div>
            <div className={'flex gap-4'}>
                <p className='lg:text-lg text-foreground-500'>{content.thanks}</p>

                <div className={'ml-auto pr-10'}>
                    <GuidingArrow/>
                </div>

            </div>

            <div className="mx-auto text-center mt-6 px-4">
                <FunnelButton text="Continue" handleSubmit={() => {}} isDisabled={!selectPlan} />
            </div>
        </div>
    );
};
