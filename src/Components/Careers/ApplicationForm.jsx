import { component$ } from '@builder.io/qwik'
import { FormBody } from 'Careers'

const ApplicationForm = component$(({ applicationForm }) => {

    const {
        fields,
        form,
    } = applicationForm
    return <>
        <div class='w-full px-5 py-10 max-w-5xl mx-auto'>
            <div class='relative z-20 flex justify-center lg:justify-end text-black'>

                <div class='max-w-full w-full rounded-3xl shadow-[4px_10px_30px_10px_rgba(0,0,0,0.3)]'>
                    <div class='w-full bg-white p-5 md:p-6 rounded-3xl '>

                        <div class='font-bold text-custom-color2 text-lg md:text-xl mb-5 md:mb-10'>{form?.title}</div>

                        <FormBody
                            form={form}
                            fields={fields}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
})

export default ApplicationForm
