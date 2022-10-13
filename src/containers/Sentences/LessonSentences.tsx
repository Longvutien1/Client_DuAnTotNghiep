import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LessonSentences = () => {

  return (
    <div className='list__sentences'>
      <div className="item__list_sentences">
        <div className="item__content__list">
          <h3 className="title__item__content__list">
            <i className="fa-solid fa-volume-high"></i> Do you know why I didn't show up last night?
          </h3>
          <div className="phonetic__content">
            /duː juː noʊ waɪ aɪ ˈdɪd|nt ʃoʊ ʌp læst naɪt/
          </div>
          <div className="viet__phonetic__content">
            Bạn biết vì sao tối qua tôi không đến không?
          </div>
        </div>
        <div className="item__icon__list">
          <button >
            <NavLink to={'/learning/detailLearning/:id/sentences/detail'}>
              <i className="fa-solid fa-chevron-right"></i>
            </NavLink>
          </button>
        </div>
      </div>

    </div>
  )
}

export default LessonSentences