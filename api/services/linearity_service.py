import numpy as np
from scipy import stats
from api.schemas.linearity_schema import LinearityRequest, LinearityResponse

class LinearityService:
    """
    Domain service for analytical linearity calculations.
    Applies Object-Oriented Programming principles and computation delegation.
    """

    def __init__(self, data: LinearityRequest):
        # Conversion to efficient C structures (NumPy)
        self.x_data = np.array(data.concentrations, dtype=np.float64)
        self.y_data = np.array(data.areas, dtype=np.float64)
        self.limit = data.r_squared_limit

    def execute_validation(self) -> LinearityResponse:
        """
        Executes Ordinary Least Squares (OLS) regression analysis.
        
        Returns:
            LinearityResponse: Data Transfer Object with standardized results.
        """
        slope, intercept, r_value, p_value, std_err = stats.linregress(
            self.x_data, self.y_data
        )
        
        r_squared = float(r_value ** 2)
        compliance = bool(r_squared >= self.limit)

        return LinearityResponse(
            slope=float(slope),
            intercept=float(intercept),
            r_squared=r_squared,
            p_value=float(p_value),
            std_error=float(std_err),
            is_compliant=compliance
        )