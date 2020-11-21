<template>
    <div class="section" style="background-color: #e5e7e7;">
        <div class="container is-fullhd">
           <div class="columns"> 
              <div class="column is-2">

              </div>
           
              <div class="column is-10">    
                <div class="columns" style="height: 20px;">

                </div>
                <div class="columns" style="height: 20px; margin-left:35px;">
                    <div class="column">
                    <h4>Consumer Analytics (Credit Cards)</h4>
                    </div>
                </div>
                <div class="columns" style="margin-top:20px;">
                    <div class="column is-4">
                        <Consumers></Consumers>
                    </div>   
              
                    <div class="column is-4">
                        <Revenue></Revenue>
                    </div>   

                    <div class="column is-4">
                        <CreditLimit></CreditLimit>
                    </div>  
                </div> 

                <div class="columns" style="margin-top:10px">
                    <div class="column is-4">
                        <ConsumersByProduct></ConsumersByProduct>
                    </div>   
                 
                    <div class="column is-4">
                        <RevenueSplit></RevenueSplit>
                        
                    </div>   
                
                    <div class="column is-4">
                        <CreditLimitByProducts></CreditLimitByProducts>
                    </div>  
                </div> 
   
                <div class="columns" style="margin-top:10px">
                    <div class="column is-12">
                        <div class="tile fortiate tile-fort long-tile">
                        <span> </span>
                        </div>
                    </div> 
                </div> 
                <div class="columns" style="height:30px;"></div>
              </div>  
         </div>
        </div>
        </div>
</template>

<script>

   import Consumers from './Consumers';
   import Revenue from './Revenue';
   import CreditLimit from './CreditLimit';
   import ConsumersByProduct from './ConsumersByProduct'; 
   import RevenueSplit from './RevenueSplit'; 
   import CreditLimitByProducts from './CreditLimitByProducts';
//    import ConsumerChurn from './ConsumerChurn';

   export default {
    name: 'consumerAnalytics',
    props: {
        msg: String
    },
    components: {
        Consumers,
        Revenue,
        CreditLimit,
        ConsumersByProduct,
        RevenueSplit,
        CreditLimitByProducts

    },
    data() {

        return {

            selected: 'Last week',

            options: ['Last week', 'Last month'],

        }

    },



}

</script>


<style>

  .rect-tile{
            background-color: #ffffff;
            width: 90% !important;
            height: 110px !important;
        }

        .square-tile{
            background-color: #ffffff;
            width: 90% !important;
            height: 200px !important;
        }

        .long-tile{
            background-color: #ffffff;
            width: 97% !important;
            height: 200px !important;
            margin-top: 35px;
        }
</style>