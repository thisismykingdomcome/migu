<template>
    <div>
        <article>
            <div class="movieArticle">
                <ul>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                    <li>
                        <div class="moviePicture">
                            
                        </div>
                        <div class="movieContent">
                            <i>五月天人生无限公司</i>
                            <div>
                                <p>导演：陈毅</p>
                                <p>胡歌|彭于晏|吴彦祖|...</p>
                            </div>
                        </div>
                        <div class="movieBuy">
                            <i>购票</i>
                        </div>
                    </li>
                </ul>
            </div>
	    </article>
    </div>
</template>

<script>
export default {
    name:"movieNow"
    
}
</script>

<style>
/* 主体 */
    article {
        font-size: .28rem !important;	
        margin-top: 1.8rem;
        
    }
    article .movieArticle{
        height: 10.4rem;
        overflow-y:auto; 
    }
    article ul li{
        margin-top: .2rem;
        border-bottom:1px solid #ccc; 
        padding-bottom: .1rem;
        display: flex;
        justify-content: space-around;
    }
    article ul li .movieContent{
        display: flex;
        flex-direction: column;
        justify-content: space-around; 
    }
    article ul li .movieBuy{
        display: flex;
        align-self: flex-end;
    }
    article ul li .movieBuy i{
        padding:.1rem; 
        border: 1px solid #f74444;
        border-radius: 5px;
        color: #f74444;
    }
    article img{
        width: 100%;
        height: 100%;
    }
    article .moviePicture{
        width: 1.32rem;
        height: 2rem;

    }

</style>
