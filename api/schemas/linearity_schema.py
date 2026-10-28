from pydantic import BaseModel, Field, model_validator
from typing import List

class LinearityRequest(BaseModel):
    """Strict validation schema for linearity data input."""
    
    concentrations: List[float] = Field(
        ..., 
        min_length=5, 
        description="List of theoretical concentrations (minimum 5 levels per ICH Q2)."
    )
    areas: List[float] = Field(
        ..., 
        min_length=5, 
        description="List of corresponding chromatographic peak areas."
    )
    r_squared_limit: float = Field(
        0.999, 
        ge=0.9, 
        le=1.0, 
        description="Acceptance criteria for the coefficient of determination."
    )

    @model_validator(mode='after')
    def check_dimensions(self) -> 'LinearityRequest':
        """Validates that the 2D arrays are symmetrical."""
        if len(self.concentrations) != len(self.areas):
            raise ValueError('The concentrations and areas lists must have the exact same length.')
        return self

class LinearityResponse(BaseModel):
    """Schema for the API standard output serialization."""
    
    slope: float = Field(..., description="Slope of the regression curve.")
    intercept: float = Field(..., description="Y-axis intercept.")
    r_squared: float = Field(..., description="Coefficient of determination.")
    p_value: float = Field(..., description="Statistical significance of the model.")
    std_error: float = Field(..., description="Standard error of the regression.")
    is_compliant: bool = Field(..., description="Automatic regulatory compliance verdict.")