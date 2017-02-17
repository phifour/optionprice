declare var math:any; // Magic

export class BinTree {

    constructor() { }


    max(x: number) {
        if (x <= 0) {
            return 0;
        } else {
            return x;
        }
    }

    q_prob(r, delta_t, sigma) {
        var u = Math.exp(sigma * Math.sqrt(delta_t));
        var d = Math.exp(-sigma * Math.sqrt(delta_t));
        return ((Math.exp(r * delta_t) - d) / (u - d));
    }

    getPriceTree(N: number, S0: number, K: number, r: number, sigma: number, T: number) {

        var tree = math.zeros(N + 1, N + 1);
        // var option_tree = math.zeros(N+1, N+1);

        //u = exp(sigma*sqrt(delta_t))
        //d = exp(-sigma*sqrt(delta_t))

        var up = 1.1;
        var down = 0.9;

        // first draw lines
        for (var i = 0; i < N; i++) {
            for (var j = 0; j < i + 1; j++) {
                var price = Math.round(Math.pow(up, i - j) * Math.pow(down, j) * S0);
                tree.subset(math.index(i, j), price);
            }
        }
        return tree;
    }


    calculatePayoffs(N: number, S0: number, K: number, r: number, sigma: number, T: number) {

        var price_tree = this.getPriceTree(N, S0, K, r, sigma, T);
        for (var i = 0; i < N+1; i++) {
            for (var j = 0; j < i + 1; j++) {
                var cur_val = price_tree.subset(math.index(i, j));
                cur_val = this.max(cur_val - K);
                price_tree.subset(math.index(i, j), cur_val);
            }
        }
        return price_tree;
    }




    // value_binomial_option = function(tree, sigma, delta_t, r, X, type) {
    //   q = q_prob(r, delta_t, sigma)

    //   option_tree = matrix(0, nrow=nrow(tree), ncol=ncol(tree))
    //   if(type == 'put') {
    //     option_tree[nrow(option_tree),] = pmax(X - tree[nrow(tree),], 0)
    //   } else {
    //     option_tree[nrow(option_tree),] = pmax(tree[nrow(tree),] - X, 0)
    //   }

    //   for (i in (nrow(tree)-1):1) {
    //     for(j in 1:i) {
    //       option_tree[i, j] = ((1-q)*option_tree[i+1,j] + q*option_tree[i+1,j+1])/exp(r*delta_t)
    //     }
    //   }
    //   return(option_tree)
    // }

    getBackPropTree(N: number, S0: number, K: number, r: number, sigma: number, T: number) {

        var option_tree = this.calculatePayoffs(N, S0, K, r, sigma, T);

        var q = 0.3;
        var delta_t = 0.1;
        //var q = this.q_prob(r, delta_t, sigma);

        for (var i = 0; i < N; i++) {
            for (var j = 0; j < i + 1; j++) {
                var cur_val = option_tree.subset(math.index(i, j));
                var nxt_u = (1 - q) * option_tree.subset(math.index(i + 1, j));
                var nxt_d = q * option_tree.subset(math.index(i + 1, j + 1));
                var tmp = math.round((nxt_u + nxt_d) / Math.exp(r * delta_t), 2);
                option_tree.subset(math.index(i, j), tmp);
            }
        }

        // var i = N - 1;

        // for (var j = 0; j < i + 1; j++) {
        //         option_tree.subset(math.index(i, j), 999);
        // }
        
        return option_tree;
    }

}

