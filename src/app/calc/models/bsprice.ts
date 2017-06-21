import { Option } from "./option";
import { Parameters } from "./parameters";

declare var math:any; // Magic

export class BSPrice {

    // public o:Option;

    // constructor(opt:Option) {
    //     this.o = opt;
    // }


    d1(S0:number, K:number, r:number, sigma:number, T:number) {
        var part1 = (Math.log(S0/K) + (r + (sigma*sigma) / 2)* T);
        var part2 = sigma * Math.sqrt(T);
        return part1/part2;
    }

    d2(S0:number, K:number, r:number, sigma:number, T:number) {
        var part1 = (Math.log(S0/K) + (r - (sigma*sigma) / 2) * T);
        var part2 = sigma * Math.sqrt(T);
        return  part1/part2; 
    }

    EuropeanCallPut(S0:number, K:number, r:number, sigma:number, T:number) {
        var erfd1 = math.erf(this.d1(S0, K, r, sigma, (T/365)));
        var erfd2 = math.erf(this.d2(S0, K, r, sigma, (T/365)));
        var call = S0 * erfd1 - K * math.exp(-r * (T/365)) * erfd2;
        var put = S0 * erfd1 + K * math.exp(-r * (T/365)) * erfd2;
        return {call:call,put:put,erfd1:erfd1,erfd2:erfd2};
    }
    
    // BlackScholes(type,S0, K, r, sigma, T):
    // if type=="C":
        
    // else:
    //    return K * np.exp(-r * T) * ss.norm.cdf(-d2(S0, K, r, sigma, T)) - S0 * ss.norm.cdf(-d1(S0, K, r, sigma, T))
}

