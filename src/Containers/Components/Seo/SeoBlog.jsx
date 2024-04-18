import { emptyDoc, searchBus, update } from '../../../assets'
import './SeoBlog.scss'

const SeoBlog = () => {

    const seoItems= [
        {
            title: 'Unrivalled Quality content at scale',
            text:'We hire the very best writers after carefully accessing them on topic expertise and writing skills.',
            image:searchBus,
        },
        {
            title:'Meaningful Long-lasting Partnership',
            text: "We cultivate a deep understanding of your audience's goals and pain points and transform these into a bespoke content strategy driven by your long-term objectives.",
            image: update,
        },
        {
            title: 'Extensive Research and Competitor Analysis',
            text: 'A critical analysis from the ground up from design infrastructure & content to in-depth competitor analysis.',
            image:emptyDoc
        }
    ]
  return (
    <div className='seo_sect'>
        <div className='seo_header'>
            <h1>
                SEO & Blogging
            </h1>
            <p>Quantifiable ・ Google compliant ・ Result-driven</p>

            <p>True success comes from being data-driven and requires detailed reporting and analytic</p>
        </div>
        <div className='seo_items'>
            {seoItems.map((item,index)=>(
                <div className='seo_item' key={index}>
                    <div className='seo_itemImg'><img src={item.image} alt={item.title} width={'50px'} height={'50px'}/></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>

        <footer className='seo_footer'>
            <p>In this lead-gen game, every pipeline matters</p>
        </footer>
    </div>
  )
}

export default SeoBlog