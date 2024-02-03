import ico from '../assets/ico.svg';
import user from '../assets/user.png';
import expenses from '../assets/expenses.png';
import budget from '../assets/budget.png';
function Task() {
  return (
    <div class=" flex md:flex-row justify-around items-center ">
     
      <div class="flex place-content-evenly   bg-slate-200 h-32 items-center  border drop-shadow m-3 ">
        <div>
          <img src={budget} alt="nothing" className='size-12' />
        </div>
        <div class="grid gap-2">
          <div>13647</div>
          <div>Total Expenses</div>
        </div>
      </div>
      <div class="flex place-content-evenly  w-56 bg-slate-200 h-32 items-center  border drop-shadow m-3">
        <div>
          <img src={user} alt="nothing" class="size-12" />
        </div>
        <div class="">
          <div>13647</div>
          <div>Total <br></br> Expenses</div>
        </div>
      </div>
      <div class="flex place-content-around w-56   bg-slate-200 h-32 items-center  border drop-shadow m-3 ">
        <div>
          <img src={expenses} alt="nothing" class="border size-10  bg-yellow-500" />
        </div>
        <div class="grid gap-2">
          <div>2323</div>
          <div >Curent Month <br />Expenses</div>
        </div>
      </div>
    </div>

  );
}

export default Task;
