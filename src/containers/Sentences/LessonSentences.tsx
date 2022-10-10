import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LessonSentences = () => {

  const [show, setShow] = useState(true)
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
          <button onClick={() => setShow(!show)}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
      {show ?
        <div className="content__detail__sentences">
          <div className="content__detail__main">
            <div className="phonetic__content__detail">
              <div className="table__spelling">
                <p>
                  <span>ÂM VÀ TỔ HỢP ÂM CẦN CHÚ Ý LUYỆN TẬP</span>
                </p>
                <table className='table__item__spelling'>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa-solid fa-volume-high"></i> am 1
                      </td>
                      <td>
                        <i className="fa-solid fa-volume-high"></i> am 1
                      </td>
                      <td>
                        <i className="fa-solid fa-volume-high"></i> am 1
                      </td>
                      <td>
                        <i className="fa-solid fa-volume-high"></i> am 1
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="structural__analysis__detail">
            <h3 className="title__structural">
              PHÂN TÍCH CẤU TRÚC
            </h3>
            <div className="content__structural">
              <div className="item__Content__structural">
                <p>
                  to <span>have a nightmare</span> = gặp ác mộng, mơ thấy ác mộng
                </p>
                <div className="translate__structural">
                  <p>
                    I'm afraid of having a nightmare.
                  </p>
                  <p>   Tôi sợ mơ thấy ác mộng.</p>
                </div>
              </div>
              <div className="item__Content__structural">
                <p>
                  to <span>have a nightmare</span> = gặp ác mộng, mơ thấy ác mộng
                </p>
                <div className="translate__structural">
                  <p>
                    I'm afraid of having a nightmare.
                  </p>
                  <p>   Tôi sợ mơ thấy ác mộng.</p>
                </div>
              </div>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}

export default LessonSentences