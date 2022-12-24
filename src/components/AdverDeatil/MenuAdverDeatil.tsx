import React, { ReactNode, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getListPracticeActivitySliceByDay } from '../../features/Slide/practiceActivity/PracticeActivitySlice';
import { PracticeActivityType } from '../../types/practiceActivity';


type PracticeActivityArr = {
  id: number,
  name: string,
  url: string,
  icon: ReactNode
}

const MenuAdverDeatil = () => {
  const { id, dayId } = useParams();
  const dispatch = useAppDispatch()
  let practiceActivity = useAppSelector<PracticeActivityType[]>(item => item.practiceActivity.valueByDay)
  const practiceLearning = [...practiceActivity]
  practiceLearning.sort((a: PracticeActivityType, b: PracticeActivityType) => a.order - b.order)
  const practiceArr = [
    {
      id: 1,
      name: "Luyện nghe nói từ phản xạ",
      url: "listenSpeak/quiz",
      icon: <i className="fa-solid fa-ear-listen"></i>
    },
    {
      id: 2,
      name: "Luyện từ vựng",
      url: "vocabulary/lesson",
      icon: <i className="fa-solid fa-file-word"></i>
    },
    {
      id: 3,
      name: "Luyện cấu trúc và câu",
      url: "sentences/lesson",
      icon: <i className="fa-solid fa-bars-staggered"></i>
    },
    {
      id: 4,
      name: "Luyện hội thoại",
      url: "conversation/listenWrite",
      icon: <i className="fa-solid fa-book-open"></i>
    },
    {
      id: 5,
      name: "Luyện ngữ pháp",
      url: "grammar/lesson",
      icon: <i className="fa-solid fa-book-open"></i>
    }
  ]


  const onChangeURL = (order: number) => {
    const flag: PracticeActivityArr[] = practiceArr.filter((item2: PracticeActivityArr) => {
      if (item2.id === order) {
        return item2.url
      }
    })
    return flag[0].url
  }

  const flag = onChangeURL(2)


  useEffect(() => {
    dispatch(getListPracticeActivitySliceByDay(dayId))
  }, [dayId])

  return (
    <div className='p-4 pb-8 border shadow-lg mb-8'>
      <div className='text-xl mb-4'>BẠN MUỐN ĐẾN PHẦN: </div>
      <ul className='m-0 p-0 divide-y-2'>
        {practiceLearning.map((item: PracticeActivityType, index: number) => {
          return <li key={index + 1} className='bg-indigo-600 px-2 py-1'>
            <NavLink to={`/learning/${dayId}/detailLearning/${item._id}/${onChangeURL(item.order)}`} className='text-white'>
              {/* Luyện nghe nói từ phản xạ */}
              {practiceArr.map((item2: PracticeActivityArr) => {
                if (item2.id === item.order) {
                  return item2.name
                }
              })}
            </NavLink>
          </li>
        })}
        <li className='bg-indigo-600 px-2 py-1'><NavLink to={`/learning/oral/${dayId}`} className='text-white'>Thi Oral</NavLink></li>
        <li className='bg-indigo-600 px-2 py-1'><NavLink to={`/learning`} className='text-white'>Danh sách ngày học</NavLink></li>
      </ul>
    </div>
  )
}

export default MenuAdverDeatil