import { CertificateCard } from 'Honors'
import { HeadingOne } from 'Shared'

const Certificates = ({
    items,
    title,
}) => {

    return <div class='py-10'>
        <HeadingOne title={title} />
        <div class='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-5'>
            {items.map(item => <CertificateCard
                key={item.id}
                {...item}
            />)}

        </div>
    </div>
}

export default Certificates
