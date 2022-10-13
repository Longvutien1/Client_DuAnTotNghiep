import React from 'react'

const DetailSentences = () => {
    return (
        <div className="content__detail__sentences">
            <div className="">
                <button className='btn__close__sentences'>
                    Quay lại
                </button>
                <button className='btn__pre__sentences'>
                    Câu trước
                </button>
                <button className='btn__next__sentences'>
                    Câu sau
                </button>
            </div>
            <div className="content__detail__main">
                <div className="topic__sentence">
                    <h3 className="title__topic__sentence">
                        <i className="fa-solid fa-volume-high"></i>  I had a nightmare last night and I lost sleep.
                    </h3>
                    <p>
                        <i className="fa-solid fa-volume-high"></i>   /aɪ hæd ə naɪt.mer læst naɪt ænd aɪ lɑːst sliːp/
                    </p>
                    <p className="phonetic__vn__sentence">
                        Tối qua, tôi gặp ác mộng rồi mất ngủ luôn.
                    </p>
                </div>
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
            <div className="">
                <button className='btn__pre__sentences'>
                    Câu trước
                </button>
                <button className='btn__next__sentences'>
                    Câu sau
                </button>
            </div>
        </div>
    )
}

export default DetailSentences