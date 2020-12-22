import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import './all.css'
import Navbar from '../NavBar/Navbar'

export default class All extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 1,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://www.breakingbadapi.com/api/characters`)
            .then(res => {
                const data = res.data;
                console.log(data)
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                  <Navbar/>
<div class="row">
  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+0].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+0].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+0].name}({data[this.state.currentPage*10+0].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+0].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+0].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+1].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+1].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+1].name}({data[this.state.currentPage*10+1].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+1].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+1].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+2].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+2].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+2].name}({data[this.state.currentPage*10+2].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+2].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+2].status} </p>
      </div>
    </div>
  </div>    
</div>

<div class="row">
  
  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+3].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+3].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+3].name}({data[this.state.currentPage*10+3].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+3].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+3].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+4].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+4].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+4].name}({data[this.state.currentPage*10+4].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+4].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+4].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+5].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+5].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+5].name}({data[this.state.currentPage*10+5].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+5].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+5].status} </p>
      </div>
    </div>
  </div>
    
</div>

<div class="row">
  
  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+6].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+6].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+6].name}({data[this.state.currentPage*10+6].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+6].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+6].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+7].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+7].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+7].name}({data[this.state.currentPage*10+7].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+7].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+7].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+8].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+8].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+8].name}({data[this.state.currentPage*10+8].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+8].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+8].status} </p>
      </div>
    </div>
  </div>
    
</div>


<div class="row">
  
  <div class="col-md-4">
  </div>

  <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src={data[this.state.currentPage*10+9].img}>
      </img>
      <div class="card-body">
        <h4 class="card-title">{data[this.state.currentPage*10+9].portrayed}</h4>
        <h6 class="card-subtitle mb-2">{data[this.state.currentPage*10+9].name}({data[this.state.currentPage*10+9].nickname})</h6>
        <p class="card-text">Date of Birth: {data[this.state.currentPage*10+9].birthday} </p>
        <p class="card-text">Status : {data[this.state.currentPage*10+9].status} </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
  </div>
    
</div>


</React.Fragment>)

                this.setState({
                    pageCount: 6,
                   
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div class="container">
                {this.state.postData}
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={1}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>

        )
    }
}