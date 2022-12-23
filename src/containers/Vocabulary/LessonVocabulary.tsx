import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { listVocabulary } from '../../api/vocabulary';
import Loading from '../../components/Loading';
import { VocabulatyType } from '../../types/vocabularyType';
import { audioSpeak } from '../../utils/audio';

const LessonVocabulary = () => {
  const [dataVocab, setDataVocab] = useState<VocabulatyType[]>([])
  const { dayId } = useParams()
  useEffect(() => {
    const getVocab = async () => {
      const { data } = await listVocabulary();
      const vocabularyByDay = data.filter((e: VocabulatyType) => e.dayId?._id === dayId)
      setDataVocab(vocabularyByDay);
    }
    getVocab()
  }, [dayId])

  return (
    <div className='voabulary__page'>
      <div className="main__voacbulary">
        <div className="content__vocabualry">
          {dataVocab.length > 0 ?
            dataVocab.map((item, index) => {
              return <div className="list__item__vocabulary" key={index + 1}>
                <div className="img__vocabulary">
                  <img src={item.image} alt="" />
                </div>

                <div className="info__vocabulary">
                  <div className="item__vocabulary">
                    <button className='text-xl' onClick={() =>
                      audioSpeak(item.words,true)
                    }>
                      <i className="fa-solid fa-volume-high mr-2"></i>
                      <span className='text-4xl'>{item.words}</span> <i className='ml-4'>{item.pa}</i>
                    </button>
                    <p>
                      {item.meaning}
                    </p>
                    <span className='text-red-500'>{item.wordForm}</span>
                  </div>

                  <div className="item__exemple__vocabulary flex space-x-1 mt-2">
                    <button className='text-xl' onClick={() =>
                      audioSpeak(item.example,true)
                    }>
                      <i className="fa-solid fa-volume-high"></i>
                    </button>
                    <span className=''>{item?.example}</span>
                  </div>

                  <div className='mt-[4px] ml-[36px]'>
                    <span className='' dangerouslySetInnerHTML={{ __html: `${item.exampleDirection}` }}></span>
                  </div>
                  
                </div>
              </div>
            })
            :
            <Loading />
          }
        </div>
      </div>
    </div>
  )
}

export default LessonVocabulary